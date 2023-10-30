/* eslint-disable react/prop-types */
import Spinner from '../../ui/Spinner';
import { getBooks } from '../../services/apiBooks';
import StarRating from '../../ui/StarRating';
import { BiBookReader } from 'react-icons/bi';
import { useQuery } from '@tanstack/react-query';

function ListElements() {
  const { isLoading, data: books } = useQuery({
    queryKey: ['books'],
    queryFn: getBooks,
  });

  if (isLoading) return <Spinner />;

  return (
    <>
      <div className="my-3 ml-10 mr-10 mt-16">
        <ul className=" relative mx-8 mr-8 grid grid-cols-5   gap-9">
          {books.map((book) => (
            <li
              key={book.id}
              className="border-1 box-content h-80 w-56  items-center rounded-3xl border-green-500 bg-emerald-100  hover:shadow-lg "
            >
              <div className="  border-1 flex items-center justify-center rounded-3xl bg-slate-300 ">
                <img src={book.image} className="mt-4 h-32 w-32 " />
              </div>
              <div></div>
              <h2 className=" border-1 mt-3 w-20 rounded-2xl bg-slate-400 text-center font-serif text-white">
                {book.category}
              </h2>
              <h2 className="font-mono-Consolas mt-2 text-center text-xl font-semibold ">
                {book.title}
              </h2>
              <p className="mt-1 text-center font-mono font-semibold text-stone-800">
                {book.author}
              </p>
              <div className="flex items-center justify-around">
                <StarRating
                  maxrating={5}
                  size={23}
                  color="black"
                  defaultRating={book.rating}
                />
                <a href={book.book} rel="noreferrer" target="_blank">
                  <BiBookReader
                    onClick={console.log('button pressed')}
                    className=" cursor-pointer"
                    size={'2em'}
                  />
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default ListElements;
