import {
  CheckCircleFilledIcon,
  CloseCircleFilledIcon,
  ErrorCircleFilledIcon,
} from 'tdesign-icons-react';
import { Space, Table, Tag } from 'tdesign-react';

type EthTableRow = {
  index: number;
  applicant: string;
  status: 0 | 1 | 2;
  channel: string;
  detail: { email: string };
  matters: string;
  time: number;
  createTime: string;
};

const data: EthTableRow[] = [];
const total = 28;

for (let i = 0; i < total; i++) {
  data.push({
    index: i + 1,
    applicant: ['贾明', '张三', '王芳'][i % 3],
    status: (i % 3) as 0 | 1 | 2,
    channel: ['电子签署', '纸质签署', '纸质签署'][i % 3],
    detail: {
      email: ['w.cezkdudy@lhll.au', 'r.nmgw@peurezgn.sl', 'p.cumx@rampblpa.ru'][
        i % 3
      ],
    },
    matters: [
      '宣传物料制作费用',
      'algolia 服务报销',
      '相关周边制作费',
      '激励奖品快递费',
    ][i % 4],
    time: [2, 3, 1, 4][i % 4],
    createTime: [
      '2022-01-01',
      '2022-02-01',
      '2022-03-01',
      '2022-04-01',
      '2022-05-01',
    ][i % 4],
  });
}

type ThemeType = 'default' | 'primary' | 'warning' | 'danger' | 'success';

type StatusNameListMap = {
  label: string;
  theme: ThemeType;
  icon: React.ReactElement;
};

const statusNameListMap: Record<number, StatusNameListMap> = {
  0: { label: '审批通过', theme: 'success', icon: <CheckCircleFilledIcon /> },
  1: { label: '审批失败', theme: 'danger', icon: <CloseCircleFilledIcon /> },
  2: { label: '审批过期', theme: 'warning', icon: <ErrorCircleFilledIcon /> },
};

export default function EthTable() {
  const table = (
    <Table
      data={data}
      columns={[
        { colKey: 'applicant', title: '申请人', width: '100' },
        {
          colKey: 'status',
          title: '申请状态',
          cell: ({ row }: { row: EthTableRow }) => (
            <Tag
              shape="round"
              theme={statusNameListMap[row.status].theme}
              variant="light-outline"
              icon={statusNameListMap[row.status].icon}
            >
              {statusNameListMap[row.status].label}
            </Tag>
          ),
        },
        { colKey: 'channel', title: '签署方式' },
        { colKey: 'detail.email', title: '邮箱地址', ellipsis: true },
        { colKey: 'createTime', title: '申请时间' },
      ]}
      rowKey="index"
      verticalAlign="top"
      size={`medium`}
      bordered={true}
      hover={true}
      stripe={true}
      showHeader={true}
      tableLayout={`fixed`}
      rowClassName={({ rowIndex }) => `${rowIndex}-class`}
      cellEmptyContent={'-'}
      resizable
      pagination={{
        defaultCurrent: 2,
        defaultPageSize: 5,
        total,
        showJumper: true,
        onChange(pageInfo) {
          console.log(pageInfo, 'onChange pageInfo');
        },
        onCurrentChange(current, pageInfo) {
          console.log(current, pageInfo, 'onCurrentChange current');
        },
        onPageSizeChange(size, pageInfo) {
          console.log(size, pageInfo, 'onPageSizeChange size');
        },
      }}
      onPageChange={(pageInfo) => {
        console.log(pageInfo, 'onPageChange');
      }}
      onRowClick={({ row, index, e }) => {
        console.log('onRowClick', { row, index, e });
      }}
    />
  );

  return <Space direction="vertical">{table}</Space>;
}
