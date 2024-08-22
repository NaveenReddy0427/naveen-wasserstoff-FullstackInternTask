
const UnitToggle = ({ units, onChange }) => {
    return (
      <div className="unit-toggle">
        <button
          className={units === 'metric' ? 'active' : ''}
          onClick={() => onChange('metric')}
        >
          Celsius
        </button>
        <button
          className={units === 'imperial' ? 'active' : ''}
          onClick={() => onChange('imperial')}
        >
          Fahrenheit
        </button>
      </div>
    );
  };
  
  export default UnitToggle;