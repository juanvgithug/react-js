/* consulta 1 - Fotos por parte */
SELECT distinct r.part_sku,
    pp.title,
    ppv.title,
    PI.product_id,
    PI.url
FROM kd_relationship r
    INNER JOIN kd_part_variant ppv ON ppv.variant_sku = r.part_sku
    INNER JOIN kd_part pp ON pp.product_id = ppv.product_id
    INNER JOIN kd_product_variant pv ON pv.variant_sku = r.product_sku
    INNER JOIN kd_product_image PI ON PI.product_id = pv.product_id
ORDER BY r.part_sku
    /* consulta 2 - variantes por sku */
SELECT distinct pv.variant_sku,
    r.part_sku,
    pp.title,
    ppv.title -- ,  PI.product_id, PI.url 
FROM kd_relationship r
    INNER JOIN kd_part_variant ppv ON ppv.variant_sku = r.part_sku
    INNER JOIN kd_part pp ON pp.product_id = ppv.product_id
    INNER JOIN kd_product_variant pv ON pv.variant_sku = r.product_sku
    INNER JOIN kd_product_image PI ON PI.product_id = pv.product_id
WHERE pv.product_id = 7511144464632