import { useState } from 'react';
import style from './MixerPanel.module.css';
import { Ingredient } from '../../types';

const MixerPanel = () => {
  const [ingredients, setIngredients] = useState<Ingredient[]>([{ color: '', amount: 0 }]);

  const addIngredient = () => {
    setIngredients([...ingredients, { color: '', amount: 0 }]);
  };

  const updateIngredient = (index: number, field: string, value: string) => {
    const newIngredients = ingredients.map((ing, i) =>
      i === index ? { ...ing, [field]: value } : ing
    );
    setIngredients(newIngredients);
  };

  const removeIngredient = (index: number) => {
    setIngredients(ingredients.filter((_, i) => i !== index));
  };

  const handleSave = () => {
    const total = ingredients.reduce((sum, ing) => sum + (ing.amount || 0), 0);

    const recipe = {
      ingredients: ingredients.map(ing => ({
        color: ing.color,
        ratio: (ing.amount || 0) / total
      }))
    };

    console.log('Saving recipe with ratios:', recipe);
  };


  return (
    <div className={style.MixerPanel}>
      <div className={style.panelHeader}>Define a new mixed color</div>
      <div className={style.panelBody}>
        {ingredients.map((ing, index) => (
          <div className={style.colorRow} key={index}>
            <input
              placeholder="Ingredient name"
              type="text"
              value={ing.color}
              onChange={(e) => updateIngredient(index, 'color', e.target.value)}
            />
            <input
              type="number"
              value={ing.amount}
              onChange={(e) => updateIngredient(index, 'amount', e.target.value)}
              min="0"
            />
            <button
              type="button"
              className={style.removeButton}
              onClick={() => removeIngredient(index)}
            >
              X
            </button>
          </div>

        ))}
        <div className={style.buttonArea}>
          <button onClick={addIngredient}>
            Add Ingredient
          </button>
          <button onClick={handleSave}>
            Save Recipe
          </button>
        </div>
      </div>
    </div>
  )
};

export default MixerPanel;
