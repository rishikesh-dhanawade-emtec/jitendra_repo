﻿using DapperCRUDApi.Dto;
using DapperCRUDApi.Entities;

namespace DapperCRUDApi.Contracts
{
    public interface ICompanyRepository
    {
        public Task<IEnumerable<Company>> GetCompanies();
        public Task<Company> GetCompany(int id);
        public Task<Company> CreateCompany(CompanyForCreationDto company);
        public Task UpdateCompany(int id, CompanyForUpdateDto company);
        public Task DeleteCompany(int id);
        public Task<Company> GetCompanyById(int id);
        public Task<Company> GetCompanyByEmployeeId(int id);
    }
    
}
