export const DataSource = <TEntity>(
  entity: { new (): TEntity },
  select: string[],
  filter?: any[]
) => {
  return {
    store: {
      version: 4,
      type: 'odata',
      key: 'Id',
      keyType: 'Int32',
      url: 'https://sistema.ravex.com.br:4001/odata1/' + entity.name,
      beforeSend: (options: { headers?: any }) => {
        options.headers = {
          authorization:
            'Bearer vTdM5jaVojhMXaWK6XoydS738X2-lRLFxKVZw_tiKr5Ii_nSXA4AHE6xUfSocIhFtUDlewmf5hOrw3fkZEyrnlqBmRNCRKHtFFm8DcZCvMba7unN4c8s10wJWw_LdvLhWezU2QE4bq5Yyft6Q_QthkupOb3Et_9oeNA_RL3ga69rjH7fer0namRJAkyUeMiHrRSF5kb2v3W2N5q2_r9Fb7JZNkpzGa5asRM94BcRv_f2I5HDr4pCcHwmY1I8YCDEC-fEI1Hx5uDI35qXtYvPKRUDdDDRGuZvrJVbpffWidvEOrArU8QX4xSIB488eOGY911Xmc3QLxNEr0ed2BNkNPAVycX6XHdZAmbYZYPtEBbG73TUYtP03GQLYig-72_2PAXLmuMh9B_fRYZGUOPzbiFVgUOiJ3fb-hmAKkEKy_lVmcY0e6SvhYfP95rv5BOZGF6UqpWjm_BGNwGsIKVU3bL5nmbQwSNbzIISad-w26MLmCb1qjH08YwmdbHaEi2H',
          idhierarquiaativa: '1',
          idusuario: '5',
          timezone: 'America/Sao_Paulo'
        };
      }
    },
    select,
    filter
  };
};
