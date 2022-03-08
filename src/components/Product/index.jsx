import { StarIcon } from "@heroicons/react/solid"

const product = {
  name: "High Power Tesla Coil",
  price: "₹599",
  href: "#",
  breadcrumbs: [
    { id: 1, name: "Projects", href: "#" },
    { id: 2, name: "Tesla Coil", href: "#" },
  ],
  images: [
    {
      src: "/products/tesla-coil/1.jpg",
      alt: "Tesla Coil Package",
    },
    {
      src: "/products/tesla-coil/2.jpg",
      alt: "Tesla Coil Package 2",
    },
    {
      src: "/products/tesla-coil/3.jpg",
      alt: "Tesla Coil Package",
    },
    {
      src: "/products/tesla-coil/4.jpg",
      alt: "Tesla Coil Package 2",
    },
    {
      src: "/products/tesla-coil/5.jpg",
      alt: "Tesla Coil Package",
    },
    {
      src: "/products/tesla-coil/6.jpg",
      alt: "Tesla Coil Package 2",
    },
  ],
  description:
    "You will get same as showing working project of Tesla Coil. It's handmade Project about wireless power transmission concept. Best part of this project is it can operate by included SMPS adaptor also as well as operate by battery. So No battery expanses again Because of its drain high current and resultant battery discharge with in 5 or 10 minutes of Ruining of this Project. So we Arrange 2 Provision to give the Power 1. using 9 volts Battery or a SMPS adaptor of 9 volts.",
  highlights: [
    "More Power full Magnetics Flus in Compare to available Tesla Coil with in this Range.",
    "included Circuit diagram and theory, you will get 1 Ready to use tesla coil can submit.",
    "Can provide the power to Tesla Coil with SMPS Adaptor of 9v 1000ma Included with this kit",
    "with 2 neon lamp and 10 LED Circuit Board",
  ],
  details:
    "You will find the Circuit Diagram and Working of this Product in this Box. Please don't touch the ball when you using it may be high current because of uses high Power Transistor in it instead of commonly using 2N2222 Transistor. Matched Secondary coil of diameter is 33mm using very thin wire so its cover more surrounding area of power transmission. We also arranged proper distance for primary coil on outer side of Holder . All circuit arrangement in the holder at bottom side please refer image 2 of this product. CFL not Included. Included 1. Ready assembled Tesla Coil on Holder 2. 9 Volts Battery 3. SMPS Adaptor 4. LED Circuit Board Wireless Power Receiver of Rolling Light 5. Circuit Diagram and Theory 6. Neon Lamp 2 nos.",
}
const reviews = { href: "#", average: 4, totalCount: 117 }

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

export default function Product() {
  return (
    <div className="bg-white">
      <div className="pt-6">
        <nav aria-label="Breadcrumb">
          <ol
            role="list"
            className="max-w-2xl mx-auto px-4 flex items-center space-x-2 sm:px-6 lg:max-w-7xl lg:px-8"
          >
            {product.breadcrumbs.map((breadcrumb) => (
              <li key={breadcrumb.id}>
                <div className="flex items-center">
                  <a
                    href={breadcrumb.href}
                    className="mr-2 text-sm font-medium text-gray-900"
                  >
                    {breadcrumb.name}
                  </a>
                  <svg
                    width={16}
                    height={20}
                    viewBox="0 0 16 20"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    className="w-4 h-5 text-gray-300"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>
            ))}
            <li className="text-sm">
              <a
                href={product.href}
                aria-current="page"
                className="font-medium text-gray-500 hover:text-gray-600"
              >
                {product.name}
              </a>
            </li>
          </ol>
        </nav>

        {/* Image gallery */}
        <div className="mt-6 max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
          <div className="aspect-w-3 aspect-h-4 rounded-lg overflow-hidden lg:block">
            <img
              src={process.env.PUBLIC_URL + product.images[0].src}
              alt={product.images[0].alt}
              className="w-full h-full object-center object-cover"
            />
          </div>
          <div className="hidden aspect-w-3 aspect-h-4 rounded-lg overflow-hidden lg:block">
            <img
              src={process.env.PUBLIC_URL + product.images[1].src}
              alt={product.images[1].alt}
              className="w-full h-full object-center object-cover"
            />
          </div>
          <div className="hidden aspect-w-3 aspect-h-4 rounded-lg overflow-hidden lg:block">
            <img
              src={process.env.PUBLIC_URL + product.images[2].src}
              alt={product.images[2].alt}
              className="w-full h-full object-center object-cover"
            />
          </div>
          <div className="hidden aspect-w-3 aspect-h-4 rounded-lg overflow-hidden lg:block">
            <img
              src={process.env.PUBLIC_URL + product.images[3].src}
              alt={product.images[3].alt}
              className="w-full h-full object-center object-cover"
            />
          </div>
          <div className="hidden aspect-w-3 aspect-h-4 rounded-lg overflow-hidden lg:block">
            <img
              src={process.env.PUBLIC_URL + product.images[4].src}
              alt={product.images[4].alt}
              className="w-full h-full object-center object-cover"
            />
          </div>
          <div className="hidden aspect-w-3 aspect-h-4 rounded-lg overflow-hidden lg:block">
            <img
              src={process.env.PUBLIC_URL + product.images[5].src}
              alt={product.images[5].alt}
              className="w-full h-full object-center object-cover"
            />
          </div>
        </div>

        {/* Product info */}
        <div className="max-w-2xl mx-auto pt-10 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:pt-16 lg:pb-24 lg:px-8 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
              {product.name}
            </h1>
          </div>

          {/* Options */}
          <div className="mt-4 lg:mt-0 lg:row-span-3">
            <h2 className="sr-only">Product information</h2>
            <p className="text-3xl text-gray-900">{product.price}</p>

            {/* Reviews */}
            <div className="mt-6">
              <h3 className="sr-only">Reviews</h3>
              <div className="flex items-center">
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      className={classNames(
                        reviews.average > rating
                          ? "text-gray-900"
                          : "text-gray-200",
                        "h-5 w-5 flex-shrink-0"
                      )}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="sr-only">{reviews.average} out of 5 stars</p>
                <a
                  href={reviews.href}
                  className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
                >
                  {reviews.totalCount} reviews
                </a>
              </div>
            </div>

            {/* <form className="mt-10">
              <a
                target="_blank"
                className="mt-10 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                href="https://rzp.io/i/m5soo1e"
                rel="noreferrer"
              >
                Buy Now
              </a>
            </form> */}
          </div>

          <div className="py-10 lg:pt-6 lg:pb-16 lg:col-start-1 lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            {/* Description and details */}
            <div>
              <h3 className="sr-only">Description</h3>

              <div className="space-y-6">
                <p className="text-base text-gray-900">{product.description}</p>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-sm font-medium text-gray-900">Highlights</h3>

              <div className="mt-4">
                <ul role="list" className="pl-4 list-disc text-sm space-y-2">
                  {product.highlights.map((highlight) => (
                    <li key={highlight} className="text-gray-400">
                      <span className="text-gray-600">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-10">
              <h2 className="text-sm font-medium text-gray-900">Details</h2>

              <div className="mt-4 space-y-6">
                <p className="text-sm text-gray-600">{product.details}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
