'use client'

import React from 'react'

import { Input } from '../../../shared/components/ui/input'

import { FilterChecboxProps, FilterCheckbox } from './filter-checkbox'

/*import { useSet } from "react-use";*/
import styles from './filters.module.css'

type Item = FilterChecboxProps

interface Props {
	/* заголовки  */
	title: string
	/* что будет показываться при не раскрытом списке */
	items: Item[]
	defaultItems: Item[]
	/* сколько будет показываться при не раскрытом списке */
	limit?: number
	/* поиск по магазинам и тд */
	searchInputPlaceholder?: string
	className?: string
	/* какие товар были выбраны*/
	onChange?: (values: string[]) => void
	defaultValue?: string[]
}

export const CheckboxFiltersGroup: React.FC<Props> = ({
	title,
	items,
	defaultItems,
	limit = 4,
	searchInputPlaceholder = 'Поиск...',
	className,
	onChange,
	defaultValue
}) => {
	const [showAll, setShowAll] = React.useState(false)
	const [searchValue, setSearchValue] = React.useState('')

	const onChangeSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchValue(e.target.value)
	}
	const list = showAll
		? items.filter(item =>
				item.text.toLowerCase().includes(searchValue.toLowerCase())
			)
		: defaultItems.slice(0, limit)
	return (
		<div className={className}>
			<p className='font-Geologica mb-[10px] mt-[30px] text-[14px]'>
				{title}
			</p>

			{showAll && (
				<div className='mb-5'>
					<Input
						onChange={onChangeSearchInput}
						placeholder={searchInputPlaceholder}
						className='border-none bg-gray-50'
					/>
				</div>
			)}

			<div className='scrollbar flex flex-col gap-[12px] overflow-auto pr-2'>
				{list.map((item, index) => (
					<FilterCheckbox
						onCheckedChange={ids => console.log(ids)}
						checked={false}
						key={String(item.value)}
						value={item.value}
						text={item.text}
						endAdornment={item.endAdornment}
					/>
				))}
			</div>

			{items.length > limit && (
				<div
					className={
						showAll ? 'mt-4 border-t border-t-neutral-100' : ''
					}
				>
					<button
						onClick={() => setShowAll(!showAll)}
						className='mt-[20px] text-[#3D5E96]'
					>
						{showAll ? 'Скрыть' : 'Ещё'}
					</button>
				</div>
			)}
		</div>
	)
}

{
	/*
"use client";

import React from "react";
/*import { useSet } from "react-use";

import { FilterCheckbox, FilterChecboxProps } from "./filter-checkbox";
import { Input } from "../ui/input";

type Item = FilterChecboxProps;

interface Props {
  /* заголовки  
  title: string;
  /* что будет показываться при не раскрытом списке 
  items: Item[];
  defaultItems?: Item[];
  /* сколько будет показываться при не раскрытом списке 
  limit?: number;
  /* поиск по магазинам и тд 
  searchInputPlaceholder?: string;
  className?: string;
  /* какие товар были выбраны
  onChange?: (values: string[]) => void;
  defaultValue?: string[];
}

export const CheckboxFiltersGroup: React.FC<Props> = ({
  title,
  items,
  defaultItems,
  limit = 5,
  searchInputPlaceholder = "Поиск...",
  className,
  onChange,
  defaultValue,
}) => {
  const [showAll, setShowAll] = React.useState(false);
  const [selected, { add, toggle }] = useSet<string>(new Set([]));

  const onCheckedChange = (value: string) => {
    toggle(value);
  };

  React.useEffect(() => {
    if (defaultValue) {
      defaultValue.forEach(add);
    }
  }, [defaultValue?.length]);

  React.useEffect(() => {
    onChange?.(Array.from(selected));
  }, [selected]);

  return (
    <div className={className}>
      <p className="font-bold mb-3">{title}</p>
      
      {showAll && (
        <div className="mb-5">
          <Input
            placeholder={searchInputPlaceholder}
            className="bg-gray-50 border-none"
          />
        </div>
      )}

      <div className="flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar">
        {(showAll ? items : defaultItems || items).map((item) => (
          <FilterCheckbox
            onCheckedChange={() => onCheckedChange(item.value)}
            checked={selected.has(item.value)}
            key={String(item.value)}
            value={item.value}
            text={item.text}
            endAdornment={item.endAdornment}
          />
        ))}
      </div>

      {items.length > limit && (
        <div className={showAll ? "border-t border-t-neutral-100 mt-4" : ""}>
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-primary mt-3"
          >
            {showAll ? "Скрыть" : "+ Показать все"}
          </button>
        </div>
      )}
    </div>
  );
};
*/
}