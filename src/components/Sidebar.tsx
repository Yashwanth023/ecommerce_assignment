
import React from 'react';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface SidebarProps {
  selectedCategories: string[];
  onCategoryChange: (categories: string[]) => void;
  priceRange: [number, number];
  onPriceChange: (range: [number, number]) => void;
}

const categories = [
  { id: 'all', label: 'All' },
  { id: 'electronics', label: 'Electronics' },
  { id: 'clothing', label: 'Clothing' },
  { id: 'accessories', label: 'Accessories' }
];

const Sidebar: React.FC<SidebarProps> = ({
  selectedCategories,
  onCategoryChange,
  priceRange,
  onPriceChange
}) => {
  const handleCategoryChange = (categoryId: string, checked: boolean) => {
    if (categoryId === 'all') {
      onCategoryChange(checked ? [] : []);
      return;
    }

    if (checked) {
      onCategoryChange([...selectedCategories, categoryId]);
    } else {
      onCategoryChange(selectedCategories.filter(cat => cat !== categoryId));
    }
  };

  return (
    <div className="w-64 space-y-6">
      {/* Blue Filter Section */}
      <div className="bg-blue-600 text-white p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-4">Filters</h3>
        <div>
          <h4 className="font-semibold mb-3">Category</h4>
          <div className="space-y-2">
            {categories.map((category) => (
              <div key={category.id} className="flex items-center space-x-2">
                <Checkbox
                  id={category.id}
                  checked={
                    category.id === 'all'
                      ? selectedCategories.length === 0
                      : selectedCategories.includes(category.id)
                  }
                  onCheckedChange={(checked) =>
                    handleCategoryChange(category.id, checked as boolean)
                  }
                  className="border-white data-[state=checked]:bg-white data-[state=checked]:text-blue-600"
                />
                <label
                  htmlFor={category.id}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {category.label}
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* White Filter Section */}
      <Card>
        <CardHeader>
          <CardTitle className="text-blue-600">Price Range</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Slider
              value={priceRange}
              onValueChange={(value) => onPriceChange(value as [number, number])}
              max={1000}
              min={0}
              step={10}
              className="w-full"
            />
            <div className="flex justify-between text-sm text-gray-600">
              <span>${priceRange[0]}</span>
              <span>${priceRange[1]}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Sidebar;
