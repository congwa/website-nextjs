import { request } from './api';


function buildTree(dataList = []) {
  const tree = [];
  const map = {};

  for (const item of dataList) {
    const id = item.id;
    const parentId = item.parentId || '';

    if (!map[id]) {
      map[id] = { children: [], ...item };
    } else {
      Object.assign(map[id], item);
    }  
    if (!map[parentId]) {
      map[parentId] = { children: [] };
    }
    map[parentId].children.push(map[id]);
  }

  for (const item of Object.values(map)) {
    if (!item.parentId) {
      tree.push(item);
    }
  }

  return tree;
}


type Menu = {
  id: number;
  name: string;
  url?: string;
  parentId?: string;
};

type ReqMenu = Omit<Menu, 'id'>;

export async function menuListReq(): Promise<Menu[]> {
  return request('/v1/menu', {
    method: 'GET',
  }).then(res => {
    return buildTree(res || [])
  })
}

export async function menuAddReq(body: ReqMenu) {
  return request('/v1/menu', {
    method: 'POST',
    data: body,
  });
}

export async function menuEditReq(id: number, body: ReqMenu) {
  return request(`/v1/menu/${id}`, {
    method: 'PATCH',
    data: body,
  });
}

export async function menuDelReq(id: number) {
  return request(`/v1/menu/${id}`, {
    method: 'DELETE',
  });
}

export async function menuDetailReq(id: number) {
  return request(`/v1/menu/${id}`, {
    method: 'GET',
  });
}
