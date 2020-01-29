module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'FastFeet',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
