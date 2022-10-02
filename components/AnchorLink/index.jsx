import Link from 'next/link';

const AnchorLink = ({ name, path, asPath }) => {
  console.assert(name, path);
  return (
    <Link href={path}>
      <a
        className={`${
          asPath === path
            ? 'border-b-2 border-[#5D9DD7] text-[#5D9DD7] hover:text-[#215a9b]'
            : 'text-[#B7B7B7] hover:text-[#215a9b]'
        }`}>
        {name}
      </a>
    </Link>
  );
};

export default AnchorLink;
