<template>
  <div class="listsup">
    <h1>This is an listed my works page</h1>
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
            <th>{{ tables.title }}</th>
            <td>{{ tables.subtitle }}</td>
            <td>{{ tables.subtitle }}</td>
            <td>{{ tables.subtitle }}</td>
          </tr>
      </tbody>
    </table>
  </div>
</template>



<script>
export default {
  name: 'tables',
  data: () => ({
    tabledata: [
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