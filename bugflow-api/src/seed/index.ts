import { dataSource } from './data-source';
import { seedStaticTables } from './statics';
import { seedDemoData } from './demo';

async function main() {
  try {
  console.log("host aas "+process.env.DB_PASSWORD)

    await dataSource.initialize();
    console.log('✅ Database connected');

    console.log('Loaded entities:', dataSource.entityMetadatas.map(e => e.name));

    await dataSource.dropDatabase();
    console.log('🧹 Database dropped');

    await dataSource.runMigrations();
    console.log('✅ Migrations executed');

    await seedStaticTables(dataSource);
    console.log('✅ Static tables seeded');

    await seedDemoData(dataSource);
    console.log('✅ Demo data seeded');
  } catch (err) {
    console.error('❌ Seeding failed:', err);
    process.exit(1);
  } finally {
    await dataSource.destroy();
    console.log('🔒 Database connection closed');
  }
}

main();
