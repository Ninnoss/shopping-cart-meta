import { useCurrency } from '../context/CurrencyContext';

const CurrencySelector = () => {
    const { currency, setCurrency } = useCurrency();
    
  function handleCurrencyChange(e) {
    setCurrency(e.target.value);
  }

  return (
    <div style={{ position: 'relative', left: '20rem', top: '4rem' }}>
      <select
        value={currency}
        onChange={handleCurrencyChange}
        style={{ fontSize: '1rem' }}>
        <option>USD</option>
        <option>Euro</option>
        <option>GBP</option>
      </select>
    </div>
  );
};

export default CurrencySelector;
