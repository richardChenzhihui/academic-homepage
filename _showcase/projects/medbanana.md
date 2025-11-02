---
show: true
width: 12
group: projects
date: 2025-11-01 00:01:00 +0800
---

<div class="p-4">
    <h2 data-en="Med-Banana-50K: Large-Scale Medical Image Editing Dataset" data-zh="Med-Banana-50K: 大规模医学图像编辑数据集">Med-Banana-50K: Large-Scale Medical Image Editing Dataset</h2>
    <hr />
    
    <div class="row">
        <div class="col-md-8">
            <p data-en="A comprehensive 50K-image dataset for instruction-based medical image editing spanning three modalities and 23 disease types." data-zh="一个包含 5 万张图像的综合数据集，用于基于指令的医学图像编辑，涵盖三种模态和 23 种疾病类型。">
                A comprehensive 50K-image dataset for instruction-based medical image editing spanning three modalities and 23 disease types.
            </p>
            
            <h4 data-en="Key Features" data-zh="主要特性">Key Features</h4>
            <ul>
                <li data-en="<strong>50,635 successful edits</strong> across 3 medical imaging modalities" data-zh="<strong>50,635 次成功编辑</strong>，涵盖 3 种医学成像模态">
                    <strong>50,635 successful edits</strong> across 3 medical imaging modalities
                </li>
                <li data-en="<strong>Chest X-ray</strong>: 12 pathology types (Pneumothorax, Pleural Effusion, etc.)" data-zh="<strong>胸部 X 光</strong>：12 种病理类型（气胸、胸腔积液等）">
                    <strong>Chest X-ray</strong>: 12 pathology types (Pneumothorax, Pleural Effusion, etc.)
                </li>
                <li data-en="<strong>Brain MRI</strong>: 4 tumor types (Glioma, Meningioma, Pituitary)" data-zh="<strong>脑部 MRI</strong>：4 种肿瘤类型（胶质瘤、脑膜瘤、垂体瘤）">
                    <strong>Brain MRI</strong>: 4 tumor types (Glioma, Meningioma, Pituitary)
                </li>
                <li data-en="<strong>Fundus photography</strong>: 7 disease types (Diabetic Retinopathy, Glaucoma, etc.)" data-zh="<strong>眼底摄影</strong>：7 种疾病类型（糖尿病视网膜病变、青光眼等）">
                    <strong>Fundus photography</strong>: 7 disease types (Diabetic Retinopathy, Glaucoma, etc.)
                </li>
                <li data-en="<strong>Bidirectional editing</strong>: lesion addition and removal" data-zh="<strong>双向编辑</strong>：病变添加和移除">
                    <strong>Bidirectional editing</strong>: lesion addition and removal
                </li>
                <li data-en="<strong>LLM-as-Judge</strong> quality control with medically grounded rubric" data-zh="<strong>LLM-as-Judge</strong> 质量控制与医学评分准则">
                    <strong>LLM-as-Judge</strong> quality control with medically grounded rubric
                </li>
                <li data-en="<strong>37K failed attempts</strong> with full conversation logs for preference learning" data-zh="<strong>37K 失败尝试</strong>，包含完整对话记录用于偏好学习">
                    <strong>37K failed attempts</strong> with full conversation logs for preference learning
                </li>
            </ul>

            <h4 data-en="Dataset Statistics" data-zh="数据集统计">Dataset Statistics</h4>
            <table class="table table-sm table-bordered">
                <thead>
                    <tr>
                        <th data-en="Modality" data-zh="模态">Modality</th>
                        <th data-en="Task" data-zh="任务">Task</th>
                        <th data-en="Diseases" data-zh="疾病数">Diseases</th>
                        <th data-en="Success" data-zh="成功">Success</th>
                        <th data-en="Failed" data-zh="失败">Failed</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Chest X-ray</td>
                        <td>Add</td>
                        <td>12</td>
                        <td>9,854</td>
                        <td>7,971</td>
                    </tr>
                    <tr>
                        <td>Chest X-ray</td>
                        <td>Remove</td>
                        <td>12</td>
                        <td>10,667</td>
                        <td>4,750</td>
                    </tr>
                    <tr>
                        <td>Brain MRI</td>
                        <td>Add</td>
                        <td>4</td>
                        <td>4,536</td>
                        <td>8,630</td>
                    </tr>
                    <tr>
                        <td>Brain MRI</td>
                        <td>Remove</td>
                        <td>4</td>
                        <td>4,355</td>
                        <td>6,949</td>
                    </tr>
                    <tr>
                        <td>Fundus</td>
                        <td>Add</td>
                        <td>7</td>
                        <td>18,505</td>
                        <td>3,162</td>
                    </tr>
                    <tr>
                        <td>Fundus</td>
                        <td>Remove</td>
                        <td>7</td>
                        <td>2,718</td>
                        <td>6,360</td>
                    </tr>
                    <tr class="font-weight-bold">
                        <td colspan="2" data-en="Total" data-zh="总计">Total</td>
                        <td>23+</td>
                        <td>50,635</td>
                        <td>37,822</td>
                    </tr>
                </tbody>
            </table>
        </div>
        
        <div class="col-md-4">
            <img src="/assets/images/covers/medbanana_cover.png" alt="Med-Banana-50K samples" class="img-fluid rounded shadow-sm mb-3">
            
            <div class="d-grid gap-2">
                <a href="https://arxiv.org/submit/6942444/view" target="_blank" class="btn btn-primary btn-sm">
                    📄 <span data-en="Read Paper" data-zh="阅读论文">Read Paper</span>
                </a>
                <a href="https://github.com/richardChenzhihui/med-banana-50k/" target="_blank" class="btn btn-secondary btn-sm">
                    💻 <span data-en="View Code" data-zh="查看代码">View Code</span>
                </a>
                <a href="https://github.com/richardChenzhihui/med-banana-50k/" target="_blank" class="btn btn-info btn-sm">
                    📦 <span data-en="Dataset (Coming Soon)" data-zh="数据集（即将发布）">Dataset (Coming Soon)</span>
                </a>
            </div>
        </div>
    </div>
    
    <div class="mt-3">
        <p class="small text-muted" data-en="<strong>Note:</strong> Full dataset will be released on Hugging Face upon paper acceptance." data-zh="<strong>注意：</strong>完整数据集将在论文接收后在 Hugging Face 上发布。">
            <strong>Note:</strong> Full dataset will be released on Hugging Face upon paper acceptance.
        </p>
    </div>
</div>

