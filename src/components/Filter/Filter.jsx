import { Fragment, useState } from 'react';
import { Disclosure } from '@headlessui/react';
import {
  FunnelIcon,
  MinusIcon,
  PlusIcon,
  Squares2X2Icon,
} from '@heroicons/react/20/solid';
import MobileFilter from './MobileFilter';

const checkFilters = [
  {
    id: 'category',
    name: 'Category',
    options: [
      { value: 'men', label: 'Men', checked: true },
      { value: 'women', label: 'Women', checked: false },
      { value: 'kids', label: 'Kids', checked: false },
      { value: 'toys', label: 'Toys', checked: false },
      { value: 'electronics', label: 'Electronics', checked: false },
      { value: 'home', label: 'Home', checked: false },
    ],
  },
];
const radioFilters = [
  {
    id: 'price',
    name: 'Price',
    options: [
      { value: { min: '1', max: '25' }, label: '1$ - 25$', checked: false },
      { value: { min: '26', max: '50' }, label: '26$ - 50$', checked: false },
      { value: { min: '51', max: '100' }, label: '51$ - 100$', checked: false },
      {
        value: { min: '101', max: '200' },
        label: '101$ - 200$',
        checked: false,
      },
      {
        value: { min: '201', max: '400' },
        label: '201$ - 400$',
        checked: false,
      },
      {
        value: { min: '401', max: '800' },
        label: '401$ - 800$',
        checked: false,
      },
    ],
  },
];

const Filter = () => {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  return (
    <div data-testid='filter' className="bg-background">
      <div>
        {/* Mobile filter dialog */}
        <MobileFilter
          mobileFiltersOpen={mobileFiltersOpen}
          setMobileFiltersOpen={setMobileFiltersOpen}
          checkFilters={checkFilters}
          radioFilters={radioFilters}
        />

        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-baseline justify-between border-b border-gray-200 pt-24 pb-6">
            <h1 className="text-4xl font-bold tracking-tight text-primary">
              New Arrivals
            </h1>

            <div className="flex items-center">
              <button
                type="button"
                className="-m-2 ml-5 p-2 text-secondary hover:text-primary sm:ml-7"
              >
                <span className="sr-only">View grid</span>
                <Squares2X2Icon className="h-5 w-5" aria-hidden="true" />
              </button>
              <button
                type="button"
                className="-m-2 ml-4 p-2 text-secondary hover:text-primary sm:ml-6 lg:hidden"
                onClick={() => setMobileFiltersOpen(true)}
              >
                <span className="sr-only">Filters</span>
                <FunnelIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>

          <section aria-labelledby="products-heading" className="pt-6 pb-24">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
              {/* Filters */}
              <form className="hidden lg:block">
                {checkFilters.map((section) => (
                  <Disclosure
                    as="div"
                    key={section.id}
                    className="border-b border-gray-200 py-6"
                    defaultOpen
                  >
                    {({ open }) => (
                      <>
                        <h3 className="-my-3 flow-root">
                          <Disclosure.Button className="flex w-full items-center justify-between bg-background py-3 text-sm text-primary hover:text-secondary">
                            <span className="font-medium text-primary">
                              {section.name}
                            </span>
                            <span className="ml-6 flex items-center">
                              {open ? (
                                <MinusIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              ) : (
                                <PlusIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              )}
                            </span>
                          </Disclosure.Button>
                        </h3>
                        <Disclosure.Panel className="pt-6">
                          <div className="space-y-4">
                            {section.options.map((option, optionIdx) => (
                              <div
                                key={option.value}
                                className="flex items-center"
                              >
                                <input
                                  id={`filter-${section.id}-${optionIdx}`}
                                  name={`${section.id}[]`}
                                  defaultValue={option.value}
                                  type="checkbox"
                                  defaultChecked={option.checked}
                                  className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-secondary"
                                />
                                <label
                                  htmlFor={`filter-${section.id}-${optionIdx}`}
                                  className="ml-3 text-sm text-primary select-none"
                                >
                                  {option.label}
                                </label>
                              </div>
                            ))}
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                ))}
                {radioFilters.map((section) => (
                  <Disclosure
                    as="div"
                    key={section.id}
                    className="border-b border-gray-200 py-6"
                  >
                    {({ open }) => (
                      <>
                        <h3 className="-my-3 flow-root">
                          <Disclosure.Button className="flex w-full items-center justify-between bg-background py-3 text-primary hover:text-secondary">
                            <span className="font-medium text-primary">
                              {section.name}
                            </span>
                            <span className="ml-6 flex items-center">
                              {open ? (
                                <MinusIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              ) : (
                                <PlusIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              )}
                            </span>
                          </Disclosure.Button>
                        </h3>
                        <Disclosure.Panel className="pt-6">
                          <div className="space-y-6">
                            <div>
                              <h3 className="sr-only">Minimum Price</h3>
                              <input
                                type="number"
                                name="min-price"
                                id="min-price"
                                placeholder="Min"
                                className="border border-gray-300 rounded-md px-3 py-2 w-1/3 md:w-1/4 mr-1 focus:outline-primary"
                              />
                              <h3 className="sr-only">Maximum Price</h3>
                              <input
                                type="number"
                                name="max-price"
                                id="max-price"
                                placeholder="Max"
                                className="border border-gray-300 rounded-md px-3 py-2 w-1/3 md:w-1/4 focus:outline-primary"
                              />
                              <button
                                type="button"
                                className="bg-primary text-background px-3 py-1 rounded-md ml-5"
                              >
                                Apply
                              </button>
                            </div>
                            {section.options.map((option, optionIdx) => (
                              <div
                                key={option.value.min}
                                className="flex items-center"
                              >
                                <input
                                  id={`filter-${section.id}-${optionIdx}`}
                                  name={`${section.id}[]`}
                                  defaultValue={option.value}
                                  type="radio"
                                  defaultChecked={option.checked}
                                  className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-secondary"
                                />
                                <label
                                  htmlFor={`filter-${section.id}-${optionIdx}`}
                                  className="ml-3 min-w-0 flex-1 text-primary select-none"
                                >
                                  {option.label}
                                </label>
                              </div>
                            ))}
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                ))}
              </form>

              {/* Product grid */}
              <div className="lg:col-span-3">
                {/* Replace with your content */}
                <div className="h-96 rounded-lg border-4 border-dashed border-gray-200 lg:h-full" />
                {/* /End replace */}
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Filter;
