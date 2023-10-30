/* eslint-disable no-unused-vars */
import { useQuery } from '@tanstack/react-query';
import { getAccount } from '../../services/apiAccount';
import Spinner from '../../ui/Spinner';
import { Avatar, Card } from 'flowbite-react';
import { AiOutlineMail } from 'react-icons/ai';
import { IoCallOutline } from 'react-icons/io5';

function Account() {
  const { isLoading, data: accounts } = useQuery({
    queryKey: ['account'],
    queryFn: getAccount,
  });
  if (isLoading) return <Spinner />;

  const currentUserId = 2;
  const { username, name, age, mailId, contactNumber } = accounts.filter(
    (user) => user.id === currentUserId,
  )[0];

  return (
    <>
      <div className="flex flex-row gap-3">
        <Card className=" border-80px h-56 w-56 items-center justify-around rounded-full border-none bg-transparent  shadow-none">
          <div className="  items-center justify-around">
            <Avatar bordered img="/image2.png" rounded size="xl" color="gray" />
          </div>
          <div className=" items-center justify-around rounded-2xl  border-2 border-solid border-slate-500 p-3 font-mono text-xl font-semibold">
            {username}
          </div>
        </Card>
        <div className="container mr-6 box-content flex-col items-center justify-around  rounded-2xl  border border-solid bg-green-100 p-4 pl-4">
          <h2 className=" p-3   text-center font-serif text-6xl font-bold ">
            {name}
          </h2>
          <div className="flex flex-row items-center justify-center pt-3 font-serif text-xl font-semibold">
            <AiOutlineMail />
            {mailId}
          </div>
          <div className="flex flex-row items-center justify-center pt-3 text-center font-bold ">
            <IoCallOutline />
            {contactNumber}
          </div>
        </div>
      </div>
    </>
  );
}

export default Account;
