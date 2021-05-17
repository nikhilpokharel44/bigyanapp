/** @format */

import Image from "next/image";

export default function Sidebar() {
  return (
    <aside className='_sidebar'>
      <form>
        <div className='search_bar'>
          <input
            className='form-control search_field rounded-0'
            type='text'
            placeholder='Search'
          />
          <button className={`search_btn`} type='submit'>
            <Image
              src='/icons/search.svg'
              alt='search icon'
              width={10}
              height={10}
            />
          </button>
        </div>
      </form>
    </aside>
  );
}
