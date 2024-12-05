import { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Icon } from '../Icon/Icon';
import style from './WaterForm.module.css';
import { useDispatch } from 'react-redux';
import { createWaterEntry } from '../../redux/water/operations';

const WaterForm = ({ entry, onAddWater }) => {
  const [initialDate, setInitialDate] = useState();
  const dispatch = useDispatch();

  const validationSchema = Yup.object().shape({
    date: Yup.string()
      .required('Time is required')
      .matches(/^([01]\d|2[0-3]):([0-5]\d)$/, 'Time must be in hh:mm format'),
    volume: Yup.number()
      .required('Value is required')
      .typeError('Value must be a number')
      .integer('Value must be an integer')
      .min(50, 'Minimum value is 50')
      .max(3000, 'Maximum value is 3000'),
  });

  const extractTime = (timestamp) => {
    const date = timestamp ? new Date(timestamp) : new Date();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`;
  };

  const defaultValues = {
    date: extractTime(entry.date),
    volume: entry.volume || '50',
  };

  const {
    control,
    handleSubmit,
    setValue,
    getValues,
    watch,
    formState: { errors },
  } = useForm({ defaultValues, resolver: yupResolver(validationSchema) });

  const currentAmount = watch('volume');

  const onSubmit = (formData) => {
    const hours = formData.date.split(':')[0];
    const minutes = formData.date.split(':')[1];
    const newDate = new Date(
      initialDate.setHours(hours, minutes)
    ).toISOString();

    console.log('Submitting water entry:', {
      volume: Number(formData.volume),
      date: newDate,
    });
    dispatch(
      createWaterEntry({
        volume: Number(formData.volume),
        date: newDate,
      })
    );
  };

  const litersFormat = (value) =>
    Number(value) >= 1000
      ? `${Math.floor(value / 1000)},${value % 1000} l`
      : `${value} ml`;

  const decreaseAmount = () => {
    if (+getValues('volume') - 50 >= 50) {
      setValue('volume', +getValues('volume') - 50);
    } else {
      setValue('volume', 50);
    }
  };

  const increaseAmount = () => {
    if (+getValues('volume') + 50 <= 3000) {
      setValue('volume', +getValues('volume') + 50);
    } else {
      setValue('volume', 3000);
    }
  };

  useEffect(() => {
    setInitialDate(entry.date ? new Date(entry.date) : new Date());
  }, [entry]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={style.waterForm}>
      <p>{entry.id ? 'Correct entered data:' : 'Choose a value:'}</p>
      <div className={style.valuePickerContainer}>
        <p>Amount of water:</p>
        <div className={style.adjustmentContainer}>
          <button
            className={style.adjustmentButton}
            type="button"
            onClick={decreaseAmount}
          >
            <Icon id="icon-minus" size={24} className={style.icon} />
          </button>
          <div className={style.amountDisplay}>
            {litersFormat(currentAmount)}
          </div>
          <button
            className={style.adjustmentButton}
            type="button"
            onClick={increaseAmount}
          >
            <Icon id="icon-plus" size={24} className={style.icon} />
          </button>
        </div>
        <label>
          <p className={style.timeBlockLabel}>Recording time:</p>
          <Controller
            name="date"
            control={control}
            render={({ field }) => (
              <input
                className={`${style.inputField} ${
                  errors.date ? style.inputError : ''
                }`}
                type="text"
                placeholder="hh:mm"
                {...field}
              />
            )}
          />
          {errors.date && (
            <span className={style.errorMessage}>{errors.date.message}</span>
          )}
        </label>
      </div>
      <label>
        <p className={style.amountBlockLabel}>
          Enter the value of the water used:
        </p>
        <Controller
          name="volume"
          control={control}
          render={({ field }) => (
            <input
              className={`${style.inputField} ${
                errors.volume ? style.inputError : ''
              }`}
              type="number"
              placeholder="Enter the value of the water used:"
              {...field}
            />
          )}
        />
        {errors.volume && (
          <span className={style.errorMessage}>{errors.volume.message}</span>
        )}
      </label>
      <br />
      <button className={style.saveBtn} type="submit">
        Save
      </button>
    </form>
  );
};

export default WaterForm;
