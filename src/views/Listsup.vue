<template>
  <div class="listsup">
    <h1>This is an listed my works page</h1>
    <p>pdf저장 기능 넣기 / 워드 다운로드 기능 넣기</p>
    <table>
      <caption>table</caption>
      <colgroup>
        <col />
        <col />
        <col />
        <col />
      </colgroup>
      <thead>
        <tr>
          <th>thead</th>
          <th>thead</th>
          <th>thead</th>
          <th>thead</th>
        </tr>
      </thead>
      <tbody>
          <tr
              v-for="(tables, i) in tabledata"
              :key="i"
              class="portfolios boxs"            
          >
            <th>{{ tdata.title }}</th>
            <td>{{ tdata.subtitle }}</td>
          </tr>
      </tbody>
    </table>
  </div>
</template>



<script>
export default {
  name: 'tables',
  data: () => ({
    thead: [
      {
        title: 'title1',
      },
      {
        title: 'title2',
      },
      {
        title: 'title3',
      },
      {
        title: 'title4',
      },
      {
        title: 'title5',
      },
    ],
    tdata: [
      {
        title: 'title',
        subtitle: 'Paragraph',
      },
      {
        title: 'title',
        subtitle: 'Paragraph',
      },
      {
        title: 'title',
        subtitle: 'Paragraph',
      },
      {
        title: 'title',
        subtitle: 'Paragraph',
      },
      {
        title: 'title',
        subtitle: 'Paragraph',
      },
      {
        title: 'title',
        subtitle: 'Paragraph',
      },
      {
        title: 'title',
        subtitle: 'Paragraph',
      },
      {
        title: 'title',
        subtitle: 'Paragraph',
      },
      {
        title: 'title',
        subtitle: 'Paragraph',
      },
      {
        title: 'title',
        subtitle: 'Paragraph',
      },
    ],
  }),
};
</script>