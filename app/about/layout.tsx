import styles from './styles.module.css';

export const metadata = {
  title: 'About Page',
  description: "This is a tutorial from Dave Gray's Youtube page",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <nav>About NavBar</nav>
      <main className={styles.main}>{children}</main>
    </>
  );
}
