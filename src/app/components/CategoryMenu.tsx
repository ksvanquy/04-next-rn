// src/app/components/CategoryMenu.tsx

interface Category {
    _id: string;
    name: string;
    children?: Category[];
  }
  
  interface CategoryMenuProps {
    categories: Category[];
    level?: number; // Thêm cấp độ để phân cấp
  }
  
  const CategoryMenu: React.FC<CategoryMenuProps> = ({ categories, level = 0 }) => {
    return (
      <ul style={{ paddingLeft: level * 20 }}> {/* Dịch chuyển bên trái để phân cấp */}
        {categories.map((category) => (
          <li key={category._id}>
            {/* Thêm dấu gạch dựa trên cấp độ */}
            {'-'.repeat(level)} {category.name}
            {category.children && category.children.length > 0 && (
              <CategoryMenu categories={category.children} level={level + 1} />
            )}
          </li>
        ))}
      </ul>
    );
  };
  
  export default CategoryMenu;
  