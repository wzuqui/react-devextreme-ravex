import DataGrid, {
  Column,
  Selection,
  FilterPanel,
  HeaderFilter,
  Lookup
} from 'devextreme-react/data-grid';
import 'devextreme/data/odata/store';
import * as React from 'react';
import { DataSource } from './providers/DataSource';
import { Pessoa } from './entities/Pessoa';
import { Entidade } from './entities/Entidade';
import Foto from './components/Foto';

import './App.css';

const dataSourceOptions = DataSource(Pessoa, [
  'Id',
  'Entidade.Id',
  'Entidade.Foto',
  'Entidade.Nome',
  'Email',
  'Entidade.Apelido',
  'Entidade.Telefone',
  'HierarquiaOrganizacional.Entidade.Apelido'
]);
console.log(dataSourceOptions);

class App extends React.Component<{}, {}> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <DataGrid
        dataSource={dataSourceOptions}
        showBorders={true}
        columnAutoWidth={true}
        columnMinWidth={50}
        height="100%"
        columnResizingMode="widget"
      >
        <Selection
          mode="multiple"
          selectAllMode="allPages"
          showCheckBoxesMode="onClick"
        />
        <FilterPanel visible={true} />
        <HeaderFilter visible={true} />

        <Column dataField="Id" caption="Identificação" />
        <Column
          dataField="Entidade.Foto"
          caption="Foto"
          alignment="center"
          cellComponent={Foto}
        />
        <Column dataField="Entidade.Id" caption="Nome">
          <Lookup
            dataSource={DataSource(
              Entidade,
              ['Id', 'Nome'],
              ['PessoaEntidade.Excluido', '=', false]
            )}
            displayExpr="Nome"
            valueExpr="Id"
          />
        </Column>
        <Column dataField="Email" caption="E-mail" />
        <Column dataField="Entidade.Apelido" caption="Apelido" />
        <Column dataField="Entidade.Telefone" caption="Telefone" />
        <Column
          dataField="HierarquiaOrganizacional.Entidade.Apelido"
          caption="Hierarquia Organizacional"
        />
      </DataGrid>
    );
  }
}

export default App;
