import RedirectButton from "@/components/RedirectButton";
import Table from "@/components/Table";
import styles from "./page.module.css";

const data = {
  title: "Seus Macrociclos",
  columns: [
    {
      key: "name",
      title: "Nome",
      isLink: true,
    },
    {
      key: "status",
      title: "Status",
    },
  ],
  rows: [
    {
      name: "Macrociclo 1",
      href: "/",
      status: "Em andamento",
    },
  ],
};

export default function Home() {
  return (
    <div className={styles["page-container"]}>
      <Table title={data.title} columns={data.columns} rows={data.rows} />
      <RedirectButton redirectUrl="/">Cadastrar Macrociclo</RedirectButton>
    </div>
  );
}
