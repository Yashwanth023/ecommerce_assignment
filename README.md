
# ShopNow - Modern E-Commerce Application

A fully-featured, responsive e-commerce web application built with React, TypeScript, and Tailwind CSS. This project demonstrates modern web development practices with a clean, user-friendly interface and comprehensive shopping functionality.

## 🚀 Features

### 🛍️ Shopping Experience
- **Product Catalog**: Browse through a curated selection of products with detailed information
- **Advanced Filtering**: Filter products by category, price range, and search functionality
- **Responsive Product Grid**: 3 products per row on desktop, 2 on mobile for optimal viewing
- **Product Details**: Comprehensive product information including specifications, features, and reviews
- **Price Categories**: Products categorized as Budget, Mid-range, or Premium

### 🔐 User Authentication
- **Local Storage Authentication**: Secure login/signup system using browser local storage
- **User Management**: Persistent user sessions with profile information
- **Protected Actions**: Cart functionality requires user authentication

### 🛒 Shopping Cart & Orders
- **Dynamic Cart Management**: Add, remove, and update product quantities
- **Real-time Cart Updates**: Live cart counter and total calculations
- **Order Tracking**: Complete order history with status tracking
- **Order Management**: View past orders with detailed information and shipping addresses

### 💳 Checkout & Payment
- **Dummy Payment System**: Complete checkout flow with form validation
- **Shipping Information**: Collect and store delivery addresses
- **Order Confirmation**: Confirmation system with order details

### 🎨 User Interface
- **Modern Design**: Clean, professional interface with blue accent colors
- **Mobile Responsive**: Fully optimized for all device sizes
- **Interactive Elements**: Hover effects, animations, and smooth transitions
- **Toast Notifications**: User feedback for all actions
- **Modal System**: Overlay dialogs for cart, authentication, and product details

### 📱 Responsive Design
- **Mobile-First Approach**: Optimized for mobile devices
- **Tablet Support**: Perfect layout for medium-sized screens
- **Desktop Enhancement**: Additional features like featured products on larger screens
- **Flexible Grid**: Adaptive product grid based on screen size

## 🛠️ Technology Stack

### Frontend Framework
- **React 18**: Modern React with hooks and functional components
- **TypeScript**: Type-safe development with full IntelliSense support
- **Vite**: Fast build tool and development server

### UI & Styling
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **Shadcn/UI**: High-quality, accessible UI components
- **Lucide React**: Beautiful, customizable icons

### State Management
- **React Context**: Global state management for authentication and cart
- **Local Storage**: Persistent data storage for user preferences and cart items

### Routing & Navigation
- **React Router**: Client-side routing for single-page application experience

### Development Tools
- **ESLint**: Code linting for consistent code quality
- **PostCSS**: CSS processing and optimization

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── ui/              # Shadcn UI components
│   ├── AuthModal.tsx    # Authentication modal
│   ├── CartModal.tsx    # Shopping cart modal
│   ├── Header.tsx       # Main navigation header
│   ├── Footer.tsx       # Footer component
│   ├── ProductCard.tsx  # Product display component
│   ├── Sidebar.tsx      # Filter sidebar
│   ├── PaymentPage.tsx  # Checkout page
│   ├── OrdersModal.tsx  # Order history modal
│   └── FeaturedProduct.tsx # Featured product display
├── contexts/            # React Context providers
│   ├── AuthContext.tsx  # Authentication state management
│   └── CartContext.tsx  # Shopping cart state management
├── data/               # Static data and types
│   └── products.ts     # Product catalog data
├── hooks/              # Custom React hooks
├── pages/              # Main application pages
│   └── Index.tsx       # Home page component
└── lib/                # Utility functions
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd shopnow-ecommerce
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

### Building for Production

```bash
npm run build
# or
yarn build
```

The built files will be in the `dist` directory, ready for deployment.

## 🎯 Key Functionalities

### Authentication System
- User registration with name, email, and password
- Secure login with credential validation
- Persistent sessions using local storage
- Logout functionality with session cleanup

### Product Management
- Dynamic product catalog with 10+ products
- Category-based filtering (Electronics, Clothing, Books, Home & Garden)
- Price range filtering with interactive slider
- Real-time search functionality
- Product ratings and reviews display

### Shopping Cart
- Add products to cart (authentication required)
- Update quantities with +/- buttons
- Remove individual items
- Clear entire cart
- Real-time total calculation
- Persistent cart across sessions

### Order Processing
- Complete checkout flow with shipping information
- Order confirmation and tracking
- Order history with status updates
- Detailed order information display

### Responsive Features
- Mobile: 2-column product grid
- Tablet: 2-3 column adaptive grid
- Desktop: 3-column grid with featured product sidebar
- Collapsible filter sidebar on mobile

## 🎨 Design Features

### Color Scheme
- Primary: Blue (#2563eb)
- Secondary: Gray tones for text and backgrounds
- Accent: Green for success states, Red for errors
- Price Categories: Color-coded badges (Green=Budget, Blue=Mid-range, Purple=Premium)

### Interactive Elements
- Hover effects on product cards
- Smooth transitions and animations
- Loading states and feedback
- Form validation with error messages

### Accessibility
- Semantic HTML structure
- Keyboard navigation support
- Screen reader friendly
- High contrast color combinations

## 🔧 Configuration

### Environment Variables
No environment variables required - the application uses local storage for data persistence.

### Customization
- Modify `src/data/products.ts` to update product catalog
- Adjust styling in Tailwind classes
- Update color scheme in `tailwind.config.ts`

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- [Shadcn/UI](https://ui.shadcn.com/) for the beautiful UI components
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Lucide React](https://lucide.dev/) for the icon library
- [React](https://reactjs.org/) for the powerful frontend framework

## 📞 Support

For support, please open an issue in the GitHub repository or contact the development team.

---

**Built with ❤️ using modern web technologies**
