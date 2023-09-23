import React from 'react';
import s from './Diary.module.css';
import { BsArrowLeft } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import DiaryTable from 'components/Table/Table';

const Diary = () => {
  const mealTypes = [
    { type: 'Breakfast', data: [] },
    { type: 'Dinner', data: [] },
    { type: 'Lunch', data: [] },
    { type: 'Snack', data: [] },
  ];

  const renderedDiaryTables = mealTypes.map(({ type, data }) => (
    <DiaryTable
      key={type}
      mealType={type}
      mealData={data}
      setFoodName={() => {}}
    />
  ));

  return (
    <div className={s.containerDiary}>
      <div className={s.btnNav}>
        <Link className={s.btnDiary} to={'/'}>
          <BsArrowLeft size="1.5rem" />
        </Link>
        <h2 className={s.textBtn}>Diary</h2>
      </div>
      <div className={s.diary}>{renderedDiaryTables}</div>
    </div>
  );
};

export default Diary;
