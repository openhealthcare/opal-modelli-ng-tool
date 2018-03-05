from django.db import models
# a django model version of the same JSON schema


class ToothExam(models.Model):
    # implements: openEHR-EHR-CLUSTER.exam_tooth.v0.adl
    # source: https://github.com/odonto/datamodel/blob/master/archetypes-draft/
    
    class Meta:
        # some meta fields I've made up
        verbose_name = "Tooth exam"
        description = "Recording of the examination of a single tooth"

    clinical_description = models.CharField(
        blank=True, null=True,
        help_text = "Findings observed during the physical examination of a tooth",
    )

    examination_findings = models.CharField(
        blank=True, null=True,
        help_text = "Structured details about the physical examination findings",
    )

    multimedia_representation = models.CharField(
        blank=True, null=True,
        help_text = "Digital image, video or diagram representing the physical examination findings",
    )

    no_abnormality_detected = models.NullBooleanField(
        help_text = "Statement that no abnormality was detected (NAD) on physical examination",
    )

    clinical_interpretation = models.CharField(
        blank=True, null=True,
        help_text = "Single word, phrase or brief description that represents the clinical meaning and significance of the physical examination findings",
    )

    comment = models.CharField(
        blank=True, null=True,
        help_text = "Additional narrative about the physical examination findings, not captured in other fields",
    )

    exam_not_done = models.CharField(
        blank=True, null=True,
        help_text = "Details to explicitly record that this examination was not performed",
    )
