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
import { selectIsLoading } from '../../redux/water/selectors';
import { useTranslation } from 'react-i18next';

const WaterForm = ({ entry, toggleModal }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const { t } = useTranslation();

  const extractDate = (timestamp) => {
    if (timestamp) return timestamp.split(' ')[0];

    const date = new Date();
    const pad = (n) => String(n).padStart(2, '0');

    return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
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
      .required(t('validationForm.drinkingTimeRequired'))
      .matches(/^([01]\d|2[0-3]):([0-5]\d)$/, t('validationForm.drinkingTimeRequired')),
    volume: Yup.number()
      .required(t('validationForm.usedWaterRequired'))
      .typeError(t('validationForm.usedWaterTypeError'))
      .integer(t('validationForm.usedWaterInteger'))
      .min(50, t('validationForm.usedWaterPositive'))
      .max(3000, t('validationForm.usedWaterMax')),
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
    <form onSubmit={handleSubmit(onSubmit)} className={style.waterForm}>
      <p>{entry._id ? t('waterForm.titleEdit') : t('waterForm.titleAdd')}</p>
      <div className={style.valuePickerContainer}>
        <p>{t('waterForm.secondTitle')}:</p>
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
          <p className={style.timeBlockLabel}>{t('waterForm.time')}:</p>
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
        <p className={style.amountBlockLabel}>{t('waterForm.waterUsed')}:</p>
        <Controller
          name="volume"
          control={control}
          render={({ field }) => (
            <input
              className={`${style.inputField} ${
                errors.volume ? style.inputError : ''
              }`}
              type="number"
              placeholder={t('waterForm.waterUsed')}
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
        {t('waterForm.button')}
      </button>
    </form>
  );
};

export default WaterForm;