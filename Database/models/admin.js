'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Admin extends Model {
        static associate(models) {
            // Define associations here (if needed)
        }
    }
    Admin.init(
        {
            name: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty: true,
                },
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
                validate: {
                    isEmail: true,
                },
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    len: [6, 128],
                },
            },
        },
        {
            sequelize,
            modelName: 'admin',
        }
    );
    return Admin;
};
