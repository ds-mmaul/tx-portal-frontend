/********************************************************************************
 * Copyright (c) 2021, 2023 T-Systems International GmbH and BMW Group AG
 * Copyright (c) 2021, 2023 Contributors to the Eclipse Foundation
 *
 * See the NOTICE file(s) distributed with this work for additional
 * information regarding copyright ownership.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Apache License, Version 2.0 which is available at
 * https://www.apache.org/licenses/LICENSE-2.0.
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations
 * under the License.
 *
 * SPDX-License-Identifier: Apache-2.0
 ********************************************************************************/

import { GridColDef } from '@mui/x-data-grid'
import { IconButton } from '@catena-x/portal-shared-components'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { ShellDescriptor } from 'features/digitalTwins/types'

// Columns definitions of Digital Twin page Data Grid
export const DigitalTwinsTableColumns = (
  translationHook: any,
  onDetailClick: (id: string) => void
): Array<GridColDef> => {
  const { t } = translationHook()

  return [
    {
      field: 'idShort',
      headerName: t('content.digitaltwin.table.columns.idShort'),
      flex: 3,
      filterable: false,
    },
    {
      field: 'sm_count',
      headerName: t('content.digitaltwin.table.columns.sm_count'),
      flex: 2,
      filterable: false,
      valueGetter: ({ row }: { row: ShellDescriptor }) =>
        row.submodelDescriptors.length,
    },
    {
      field: 'asset_count',
      headerName: t('content.digitaltwin.table.columns.asset_count'),
      flex: 2,
      filterable: false,
      valueGetter: ({ row }: { row: ShellDescriptor }) =>
        row.specificAssetIds.length,
    },
    {
      field: 'detail',
      headerName: 'Detail',
      flex: 1,
      sortable: false,
      filterable: false,
      width: 150,
      renderCell: ({ row }: { row: ShellDescriptor }) => (
        <IconButton
          onClick={() => onDetailClick(row.identification)}
          color="secondary"
          size="small"
          style={{ alignSelf: 'center' }}
        >
          <ArrowForwardIcon />
        </IconButton>
      ),
    },
  ]
}