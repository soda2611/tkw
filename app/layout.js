export const metadata = {
  title: "MUI Element Examples",
  description: "Ví dụ về các thành phần giao diện người dùng sử dụng Material-UI",
  icons: {
    icon: "https://github.com/soda2611/tkw/blob/main/public/demo/images/image.png?raw=true",
    shortcut: "https://github.com/soda2611/tkw/blob/main/public/demo/images/image.png?raw=true",
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
