export const metadata = {
  title: 'GreenFarm',
  description: 'Website bán nông sản - rau củ sạch',
  icons: {
    icon: '/tkw/demo/images/image.png',
    shortcut: '/tkw/demo/images/image.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        {children}
      </body>
    </html>
  );
}
