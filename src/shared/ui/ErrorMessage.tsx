export const ErrorMessage = ({ error }: { error: Error }) => {
  return <div className='text-2xl text-red-700'>{error.message}</div>;
};
