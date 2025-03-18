import Link from "next/link";

interface BreadcrumbProps {
  categories: string[];
}

export default function Breadcrumb({ categories }: BreadcrumbProps) {
  return (
    <nav className="text-gray-500 text-sm mb-4 ml-4">
      <ul className="flex space-x-2">
        <li>
          <Link href="/" className="hover:underline">Home</Link>
        </li>
        {categories.map((category, index) => (
          <li key={index} className="flex items-center">
            <span className="mx-2">›</span>
            {index === categories.length - 1 ? (
              <span className="text-black font-medium capitalize">{category}</span>
            ) : (
              <Link href={`/${category.toLowerCase()}`} className="hover:underline capitalize">
                {category}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
