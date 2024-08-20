
export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%'}}>
        {children}
      </div>
    );
  }