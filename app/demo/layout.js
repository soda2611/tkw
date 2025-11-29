export const metadata = {
  title: 'GreenFarm',
  description: 'Website bán nông sản - rau củ sạch',
  icons: {
    icon: 'https://github.com/soda2611/tkw/blob/main/public/demo/images/image.png?raw=true',
    shortcut: 'https://github.com/soda2611/tkw/blob/main/public/demo/images/image.png?raw=true',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <style>
        {`
          ::-webkit-scrollbar {
            width: 8px;
            background: #f1f1f1;
          }
          ::-webkit-scrollbar-thumb {
            background: #4caf50;
            border-radius: 4px;
          }
          ::-webkit-scrollbar-thumb:hover {
            background: #388e3c;
          }
            
          html {
            scrollbar-width: thin;
            scrollbar-color: #4caf50 #f1f1f1;
          }
        `}
      </style>
      <body>
        {children}
      </body>
    </html>
  );
}
