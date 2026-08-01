import "@/assets/styles/globals.css";

export const metadata = {
  title: "Property Pulse",
  keywords: "rental, property, real state",
  description: "Find the perfect rental property",
};

const MainLayout = ({ children }) => {
  return (
    <html>
      <body cz-shortcut-listen="true">
        <main>{children}</main>
      </body>
    </html>
  );
};

export default MainLayout;
