import { Table } from "cx-portal-shared-components";
import { useEffect } from "react";
import { useTranslation } from "react-i18next"
import { useDispatch, useSelector } from "react-redux";
import { fetchDigitalTwins } from "state/features/digitalTwins/actions";
import { twinsSelector } from "state/features/digitalTwins/slice";
import { DigitalTwinsTableColumns } from "./DigitalTwinsTableColumns";
import { data } from "./staticData";

const TwinTable = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch()
  const { twins, loading, error } = useSelector(twinsSelector);
  const rowCount = 10;

  useEffect(() => {
    dispatch(fetchDigitalTwins({filter: { page: 1, pageSize: rowCount }}))
  }, [dispatch]);

  const columns = DigitalTwinsTableColumns(useTranslation);

  const onSearch = (value: string) => {
    console.log(value);
  }

  return(
    <section>
      <Table
        rowCount={rowCount}
        rowsPerPageOptions={[10, 25, 50]}
        loading={loading}
        disableSelectionOnClick={true}
        title={t('content.digitaltwin.table.title')}
        toolbar={{
          onSearch: onSearch,
        }}
        columns={columns}
        rows={data.items}
        getRowId={(row) => row.identification}
      />
    </section>
  )
}

export default TwinTable