import  { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import style from "./ModalUserSettings.module.css";
import { Icon } from '../Icon/Icon';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCurrentUser } from '../../redux/auth/operations';
import { selectAuthUser, selectIsLoading } from '../../redux/auth/selectors';
import Loader from '../Loader/Loader';

const validationSchema = Yup.object().shape({
    gender: Yup.string().required('Gender is required'),
    name: Yup.string().min(3).max(30).required('Name is required'),
    email: Yup.string().email('Email is invalid').required('Email is required'),
    weight: Yup.number().required('Weight is required').positive().integer().typeError('Weight must be a number'),
    activeTime: Yup.number().required('Active time is required').positive().integer().typeError('Active time must be a number'),
    waterIntake: Yup.number().required('Water intake is required').positive(),
});

export const ModalUserSettings = () => {
    const dispatch = useDispatch();
    const [avatar, setAvatar] = useState(null);
    const [selectedGender, setSelectedGender] = useState('female');
    const [formData, setFormData] = useState({ weight: '', activeTime: '', waterIntake: '' });
    const [waterIntake, setWaterIntake] = useState(0);
    const genders = ['female', 'male'];
const user  = useSelector(selectAuthUser);
const IsLoading  = useSelector(selectIsLoading);

    const { handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(validationSchema),
    });

    useEffect(() => {
        dispatch(fetchCurrentUser());
    }, [dispatch]);
    useEffect(() => {
        if (user) {
            setFormData({
                avatar: user.data.avatar ,
                name: user.data.name || '',
                email: user.data.email || '',
                weight: user.data.weight || '',
                activeTime: user.data.activeTime || '',
                waterIntake: user.data.waterIntake || '',
            });
            setSelectedGender(user.data.gender || null);
        }
    }, [user, avatar]);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setAvatar(URL.createObjectURL(file));
        }
    };

    const handleInputChange = (e, selectedGender) => {
        const { name, value } = e.target;

        setFormData((prevData) => {
            const updatedData = { ...prevData, [name]: value };
            const weight = parseFloat(updatedData.weight) || 0;
            const activeTime = parseFloat(updatedData.activeTime) || 0;
            let calculatedWaterIntake = 0;

            if (selectedGender === 'female') {
                calculatedWaterIntake = weight * 0.03 + activeTime * 0.4;
            } else if (selectedGender === 'male') {
                calculatedWaterIntake = weight * 0.04 + activeTime * 0.6;
            }
            setWaterIntake(calculatedWaterIntake.toFixed(1));
            return updatedData;
        });
    };

    const onSubmit = async (data) => {
        const formData = new FormData();
        formData.append('gender', data.gender);
        formData.append('name', data.name);
        formData.append('email', data.email);
        formData.append('weight', data.weight);
        formData.append('activeTime', data.activeTime);
        formData.append('waterIntake', waterIntake || data.waterIntake);

        console.log(formData);
    };

    return (
    <>
      {IsLoading &&  <Loader />}
        <div className={style.wrapper}>
            <h2 className={style.title}>Setting</h2>
            <img src={formData.avatar} alt="User's avatar" className={style.user_avatar}/>
            <div className={style.upload_photo}>
                <label className={style.upload_label}>
                    <Icon id="icon-upload" size={18} className={style.icon_upload} />Upload a photo
                    <input type="file" onChange={handleFileChange} className={style.file_input} />
                </label>
            </div> 
            <div className={style.scroll_container}>
                <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
                    <div className={style.form_group_wrapper}>
                        <div className={style.form_group}>
                            <div className={style.gender_identity_container}>
                                <label className={style.label_title}>Your gender identity:</label>
                                <div className={style.checkbox_wrapper}>
                                    {genders.map((gender, index) => (
                                        <label key={index} className={style.label_text}>
                                            <input
                                                className={style.radioBtn}
                                                type="radio"
                                                name="gender"
                                                value={gender}
                                                checked={selectedGender === gender}
                                                onChange={(e) => {
                                                    setSelectedGender(e.target.value);
                                                    handleInputChange(e, e.target.value);
                                                }}
                                            />
                                            <div className={`${style.custom_checkbox} ${selectedGender === gender ? style.active_checkbox : ""}`}>
                                                <span></span>
                                            </div>
                                            {gender === "female" ? "Woman" : "Man"}
                                        </label>
                                    ))} 
                                </div>
                                {errors.gender && <p className={style.error_message}>{errors.gender.message}</p>}
                            </div>
                            <div className={style.name_email_wrapper}>
                                <div className={style.name_email_group}>
                                    <label className={style.label_title}>Your name:</label>
                                    <input type="text"
                                        name="name"
                                        value={formData.name}
                                                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className={style.name_email_input}
                                    /> 
                                    {errors.name && <p className={style.error_message}>{errors.name.message}</p>}
                                </div>
                                <div className={style.name_email_group}>
                                    <label className={style.label_title}>Email:</label>
                                    <input type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className={style.name_email_input}
                                    />
                                    {errors.email && <p className={style.error_message}>{errors.email.message}</p>}
                                </div>
                            </div>
                            <div className={style.water_norm_group}>
                                <label className={style.label_title}>My daily norma:</label>
                                <div className={style.water_norm_container}>
                                    <p className={style.water_norm_title}>For woman: <span className={style.water_norm_span}>V=(M*0,03) + (T*0,4)</span> </p>
                                    <p className={style.water_norm_title}>For man: <span className={style.water_norm_span}>V=(M*0,04) + (T*0,6)</span> </p>
                                </div>
                                <p className={style.water_norm_description}><span className={style.water_norm_description_span}>*</span> V is the volume of the water norm in liters per day, M is your body weight, T is the time of active sports, or another type of activity commensurate in terms of loads (in the absence of these, you must set 0)</p>
                                <p className={style.water_norm_calling}><Icon size={18} id="icon-calling" className={style.icon_calling} /> Active time in hours</p>
                            </div>
                        </div>
                        <div className={style.form_group}>
                            <div className={style.weight_and_time_wrapper}>
                                <div className={style.weight_and_time_group}>
                                    <label className={style.label_text}>Your weight in kilograms:</label>
                                    <input
                                        type="number"
                                        name="weight"
                                        value={formData.weight}
                                        onChange={(e) => handleInputChange(e, selectedGender)}
                                        className={style.input_weight}
                                        min="0"
                                    />
                                    {errors.weight && <p className={style.error_message}>{errors.weight.message}</p>}
                                </div>
                                <div className={style.weight_and_time_group}>
                                    <label className={style.label_text}>The time of active participation in sports:</label>
                                    <input
                                        type="number"
                                        name="activeTime"
                                        value={formData.activeTime}
                                        onChange={(e) => handleInputChange(e, selectedGender)}
                                        className={style.input_active_time}
                                        min="0"
                                    />
                                    {errors.activeTime && <p className={style.error_message}>{errors.activeTime.message}</p>}
                                </div>
                            </div>
                            <div className={style.water_intake_container}>
                                <div className={style.water_requirement_group}>
                                    <p className={style.label_text}>The required amount of water in liters per day:</p>
                                    <p className={style.water_amount}>1.8 L</p>
                                </div>
                                <div className={style.water_intake_input_group}>
                                    <label className={style.label_title}>Write down how much water you will drink:</label>
                                    <input type="number"
                                        name="waterIntake"
                                        value={waterIntake}
                                        onChange={(e) => setWaterIntake(e.target.value)}
                                        className={style.input_drunk_water}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <button type="submit" className={style.btn_submit}>Save</button>
                </form>
            </div>
        </div></>
    );
};


