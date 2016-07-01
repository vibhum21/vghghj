package com.ppm.dao.impl;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.ppm.dao.ProjectDao;

import com.ppm.model.ProjectModel;

@Repository
public class ProjectDaoImpl implements ProjectDao {
	protected EntityManager entityManager;

	public EntityManager getEntityManager() {
		return entityManager;
	}
	
	@PersistenceContext
	public void setEntityManager(EntityManager entityManager) {
		this.entityManager = entityManager;
	}
	
	@Transactional
	@Override
	public void addProject(ProjectModel projectModel) {

		try{
			entityManager.persist(projectModel);
			entityManager.flush();
		}catch(Exception ex){
			System.out.println("Exception occured while saving project table"+ex.getMessage());
			ex.printStackTrace();
		}
	}

	@Transactional
	@Override
	public void updateProject(ProjectModel projectModel) {
		ProjectModel proj = new ProjectModel();
		System.out.println(proj);
		proj.setProjectid(projectModel.getProjectid());
		proj.setType(projectModel.getType());
		proj.setStartdate(projectModel.getStartdate());
		proj.setEnddate(projectModel.getEnddate());
		proj.setVisibleduration(projectModel.getVisibleduration());
		proj.setStatus(projectModel.getStatus());
		proj.setMethodology(projectModel.getMethodology());
		proj.setDescription(projectModel.getDescription());
		proj.setAm(projectModel.getAm());
		proj.setPm(projectModel.getPm());
		proj.setDm(projectModel.getDm());
		proj.setClient(projectModel.getClient());
		proj.setBudget(projectModel.getBudget());
		proj.setEstimatedeffort(projectModel.getEstimatedeffort());
		proj.setClientpoc(projectModel.getClientpoc());
		proj.setTools(projectModel.getTools());
		proj.setConsultant(projectModel.getConsultant());
		proj.setName(projectModel.getName());
		entityManager.persist(proj);
		System.out.println(proj);
	}
	
	@Override
	@Transactional
	public void deleteProject(int projectid) {
		ProjectModel project = getProject(projectid);
		entityManager.remove(project);
		
	}
	
	@Override
	public ProjectModel getProject(int projectid) {
		ProjectModel project = entityManager.find(ProjectModel.class, projectid);
		return project;
	}
	
	@Override
	public List<ProjectModel> getAllProject() {
		TypedQuery<ProjectModel> qt = entityManager.createQuery("SELECT e FROM ProjectModel e", ProjectModel.class);
		List<ProjectModel> projectList = (List<ProjectModel>)qt.getResultList();
		System.out.println("employeeList"+projectList);
		return projectList;
	}
	
}
