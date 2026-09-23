import "./FilterDropdown.css";

interface CategoryCount {
  category: string;
  count: number;
}

interface FilterDropdownProps {
  categories: CategoryCount[];
  selectedCategories: string[];
  onChange: (selected: string[]) => void;
}

function FilterDropdown({ categories, selectedCategories, onChange }: FilterDropdownProps) {
  return (
    <div className="filter-dropdown">
      {/* TODO: multi-select category filter with counts */}
    </div>
  );
}

export default FilterDropdown;
