import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Icon } from '../Icon/Icon';
import style from './WaterForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  createWaterEntry,
  patchWaterEntry,
} from '../../redux/water/operations';
// import Loader from '../Loader/Loader';
import { selectIsLoading } from '../../redux/water/selectors';

const WaterForm = ({ entry, toggleModal }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  const extractDate = (timestamp) => {
    if (timestamp) return timestamp.split(' ')[0];

    const date = new Date();
    const pad = (n) => String(n).padStart(2, '0');

    return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(
      date.getDate()
    )}`;
  };

  const extractTime = (timestamp) => {
    if (timestamp) return timestamp.split(' ')[1];

    const date = new Date();
    const pad = (n) => String(n).padStart(2, '0');

    return `${pad(date.getHours())}:${pad(date.getMinutes())}`;
  };

  const entryDate = extractDate(entry.date);
  const entryTime = extractTime(entry.date);

  const validationSchema = Yup.object().shape({
    time: Yup.string()
      .required('Time is required')
      .matches(/^([01]\d|2[0-3]):([0-5]\d)$/, 'Time must be in hh:mm format'),
    volume: Yup.number()
      .required('Value is required')
      .typeError('Value must be a number')
      .integer('Value must be an integer')
      .min(50, 'Minimum value is 50')
      .max(3000, 'Maximum value is 3000'),
  });

  const defaultValues = {
    time: entryTime,
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
    if (entry._id) {
      dispatch(
        patchWaterEntry({
          id: entry._id,
          updatedData: {
            volume: Number(formData.volume),
            date: `${entryDate} ${formData.time}`,
          },
        })
      ).then(toggleModal);
    } else {
      dispatch(
        createWaterEntry({
          volume: Number(formData.volume),
          date: `${entryDate} ${formData.time}`,
        })
      ).then(toggleModal);
    }
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

  return (
    <>
      {/* {isLoading && <Loader />} */}
      <form onSubmit={handleSubmit(onSubmit)} className={style.waterForm}>
        <p>{entry._id ? 'Correct entered data:' : 'Choose a value:'}</p>
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
        <button className={style.saveBtn} disabled={isLoading} type="submit">
          Save
        </button>
      </form>
    </>
  );
};

export default WaterForm;
