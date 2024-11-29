import { useForm, Controller } from 'react-hook-form';
import { Icon } from '../Icon/Icon';
import style from './WaterForm.module.css';
import { useDispatch } from 'react-redux';
import { createWaterEntry } from '../../redux/water/operations';

const WaterForm = ({ data }) => {
  const dispatch = useDispatch();

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
  } = useForm({ defaultValues });

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

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={style.waterForm}>
      <p>{data.id ? 'Correct entered data:' : 'Choose a value:'}</p>
      <div className={style.valuePickerContainer}>
        <p>Amount of water:</p>
        <div className={style.adjustmentContainer}>
          <button
            className={style.adjustmentButton}
            type="button"
            onClick={() => setValue('amount', +getValues('amount') - 50)}
          >
            <Icon id="icon-minus" size={24} className={style.icon} />
          </button>
          <div className={style.amountDisplay}>
            {litersFormat(currentAmount)}
          </div>
          <button
            className={style.adjustmentButton}
            type="button"
            onClick={() => setValue('amount', +getValues('amount') + 50)}
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
                className={style.inputField}
                type="text"
                placeholder="hh:mm"
                {...field}
              />
            )}
          />
          {errors.time && <span>{errors.time.message}</span>}
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
              className={style.inputField}
              type="number"
              placeholder="Enter the value of the water used:"
              {...field}
            />
          )}
        />
        {errors.amount && <span>{errors.amount.message}</span>}
      </label>
      <br />
      <button className={style.saveBtn} type="submit">
        Save
      </button>
    </form>
  );
};

export default WaterForm;
