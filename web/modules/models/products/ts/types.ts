export type TLoadItems = {
  page?: number
};

export interface IResponseLoad {
  status: boolean
  data: IData
}

export interface IData {
  entries: IEntry[]
  total: number
}

export interface IEntry {
  id: number
  name?: string
  description?: string
  processId?: number
  areaId?: number
  workflowStateId?: number
  taskId: number
  userId?: number
  data: any
  creatorUserId?: number
  modifierUserId?: number
  timeCreated: string
  timeUpdated: string
  esgasto?: number
  user?: IUser
  task: ITask
  workflowState?: IWorkflowState
}

export interface IUser {
  id: number
  name: any
  lastname: any
  email: any
}

export interface ITask {
  id: number
  name: string
  description: any
  statusId: any
  creatorUserId: any
  modifierUserId: any
  timeCreated: any
  timeUpdated: any
}

export interface IWorkflowState {
  id: number
  name: string
  statusId: number
  creatorUserId: any
  modifierUserId: any
  timeCreated: any
  timeUpdated: any
}
