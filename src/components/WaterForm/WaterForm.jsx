import { useForm, Controller, set } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Icon } from '../Icon/Icon';
import style from './WaterForm.module.css';
import { useDispatch } from 'react-redux';
import { createWaterEntry } from '../../redux/water/operations';

const WaterForm = ({ data }) => {
  const dispatch = useDispatch();

  const validationSchema = Yup.object().shape({
    time: Yup.string()
      .required('Time is required')
      .matches(/^([01]\d|2[0-3]):([0-5]\d)$/, 'Time must be in hh:mm format'),
    amount: Yup.number()
      .required('Amount is required')
      .typeError('Amount must be a number')
      .integer('Amount must be an integer')
      .min(50, 'Minimum amount is 50')
      .max(3000, 'Maximum amount is 3000'),
  });

  const extractTime = (timestamp) => {
    const date = timestamp ? new Date(timestamp) : new Date();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`;
  };

  const defaultValues = {
    time: extractTime(data.time),
    amount: data.amount || '50',
  };

  const {
    control,
    handleSubmit,
    setValue,
    getValues,
    watch,
    formState: { errors },
  } = useForm({ defaultValues, resolver: yupResolver(validationSchema) });

  const currentAmount = watch('amount');

  const onSubmit = (formData) => {
    console.log('Submitting water entry:', {
      amount: Number(formData.amount),
      time: formData.time,
    });
    dispatch(
      createWaterEntry({
        amount: Number(formData.amount),
        time: formData.time,
      })
    );
  };

  const litersFormat = (value) =>
    Number(value) >= 1000
      ? `${Math.floor(value / 1000)},${value % 1000} l`
      : `${value} ml`;

  const decreaseAmount = () => {
    if (+getValues('amount') - 50 >= 50) {
      setValue('amount', +getValues('amount') - 50);
    } else {
      setValue('amount', 50);
    }
  };

  const increaseAmount = () => {
    if (+getValues('amount') + 50 <= 3000) {
      setValue('amount', +getValues('amount') + 50);
    } else {
      setValue('amount', 3000);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={style.waterForm}>
      <p>{data.id ? 'Correct entered data:' : 'Choose a value:'}</p>
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
            name="time"
            control={control}
            render={({ field }) => (
              <input
                className={`${style.inputField} ${
                  errors.time ? style.inputError : ''
                }`}
                type="text"
                placeholder="hh:mm"
                {...field}
              />
            )}
          />
          {errors.time && (
            <span className={style.errorMessage}>{errors.time.message}</span>
          )}
        </label>
      </div>
      <label>
        <p className={style.amountBlockLabel}>
          Enter the value of the water used:
        </p>
        <Controller
          name="amount"
          control={control}
          render={({ field }) => (
            <input
              className={`${style.inputField} ${
                errors.amount ? style.inputError : ''
              }`}
              type="number"
              placeholder="Enter the value of the water used:"
              {...field}
            />
          )}
        />
        {errors.amount && (
          <span className={style.errorMessage}>{errors.amount.message}</span>
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
