import Link from "next/link";
import Image from "next/image";

export default function CommanCard({
  title,
  description,
  image,
  link,
  tag,
}) {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-100 overflow-hidden group">
      
      {/* Image */}
      {image && (
        <div className="relative w-full h-44 overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition duration-300"
          />
        </div>
      )}

      {/* Content */}
      <div className="p-5">
        {tag && (
          <span className="inline-block text-xs font-semibold text-blue-400  px-2 py-1 rounded mb-2">
            {tag}
          </span>
        )}

        <h3 className="text-lg font-bold text-gray-800 mb-2">
          {title}
        </h3>

        <p className="text-sm text-gray-600 mb-4 line-clamp-3">
          {description}
        </p>

        {link && (
          <Link
            href={link}
            className="inline-flex items-center text-sm font-semibold text-indigo-600 hover:underline"
          >
            View Project →
          </Link>
        )}
      </div>
    </div>
  );
}
