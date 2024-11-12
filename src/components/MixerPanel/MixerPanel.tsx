import { useState } from 'react';
import style from './MixerPanel.module.css';
import { Ingredient } from '../../types';

const MixerPanel = () => {
  const [ingredients, setIngredients] = useState<Ingredient[] | null>(null);

  return (
    <div className={style.MixerPanel}>
      <div className={style.panelHeader}>New color</div>
      <div className={style.panelBody}>
        
      </div>
    </div>
  )
};

export default MixerPanel;
