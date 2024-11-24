import WaterForm from '../WaterForm/WaterForm';

const WaterModal = ({ data = {} }) => {
  return (
    <>
      {data.id ? 'Edit the entered amount of water' : 'Add water'}
      <WaterForm data={data} />
    </>
  );
};

export default WaterModal;
