import Image from 'next/image';

export default function FunctionCard({ title, logo, category, ...rest }) {
  return (
    <div
      className="flex border border-grey-200 dark:border-gray-900 rounded p-4 w-full justify-center"
      {...rest}
    >
      <Image alt={title} height={42} width={42} src={logo} />
      <h3 className="text-lg font-bold text-left mt-2 ml-2 text-gray-900 dark:text-gray-100">
        {title}
      </h3>
    </div>
  );
}
