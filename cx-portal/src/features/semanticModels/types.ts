import { Nullable, RequestState } from 'types/MainTypes'

export interface SemanticModelsInitialState {
  modelList: ModelList
  loadingModelList: boolean
  model: Nullable<SemanticModel>
  loadingModel: boolean
  diagram: string
  ttlFile: string
  jsonFile: string
  docuFile: string
  payloadFile: string
  uploadedModel: Nullable<SemanticModel>
  uploading: boolean
  uploadRequest: RequestState
  openApiLink: string
  openApiError: string
  error: string
}

export type FilterParams = {
  readonly page: number
  readonly pageSize: number
}

export interface ModelList {
  items: Array<SemanticModel>
  totalItems: number
  itemCount: number
  currentPage: number
  totalPages: number
}

export interface SemanticModel {
  name: string
  description: string
  urn: string
  version: string
  type: string
  status: string
}

export interface NewSemanticModel {
  model: string
  type: string
  status: Status
}

export enum Status {
  Draft = 'DRAFT',
  Released = 'RELEASED',
}
