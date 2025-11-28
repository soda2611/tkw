export const metadata = {
  title: "Website bán nông sản - rau củ sạch",
  description: "Đồ án cuối kì của nhóm tkw",
  icons: {
    icon: "/demo/images/image.png",
    shortcut: "/demo/images/image.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
