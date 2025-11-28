export const metadata = {
  title: "MUI Element Examples",
  description: "Ví dụ về các thành phần giao diện người dùng sử dụng Material-UI",
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
